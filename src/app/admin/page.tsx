'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash, Edit } from 'lucide-react';

interface Lesson {
  description: string;
  includes: boolean;
}

interface Tariff {
  id: number;
  title: string;
  price: string;
  lessons: Lesson[];
}

export default function AdminPage() {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>([{ description: '', includes: false }]);
  const [editingTariff, setEditingTariff] = useState<Tariff | null>(null);

  useEffect(() => {
    fetchTariffs();
  }, []);

  const fetchTariffs = async () => {
    const { data, error } = await supabase.from('tariffs').select('*').order('id');
    if (error) {
      console.error('Error fetching tariffs:', error);
    } else {
      setTariffs(data as Tariff[]);
    }
  };

  const handleLessonChange = (index: number, field: keyof Lesson, value: string | boolean) => {
    const newLessons = [...lessons];
    (newLessons[index] as any)[field] = value;
    setLessons(newLessons);
  };

  const addLesson = () => {
    setLessons([...lessons, { description: '', includes: false }]);
  };

  const removeLesson = (index: number) => {
    const newLessons = lessons.filter((_, i) => i !== index);
    setLessons(newLessons);
  };

  const resetForm = () => {
    setTitle('');
    setPrice('');
    setLessons([{ description: '', includes: false }]);
    setEditingTariff(null);
  };

  const handleEdit = (tariff: Tariff) => {
    setEditingTariff(tariff);
    setTitle(tariff.title);
    setPrice(tariff.price);
    setLessons(tariff.lessons);
  };

  const handleSubmit = async () => {
    if (!title || !price || lessons.some((l) => !l.description)) {
      alert("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    if (editingTariff) {
      // Update logic
      const { data, error } = await supabase
        .from('tariffs')
        .update({ title, price, lessons })
        .eq('id', editingTariff.id)
        .select();
      if (error) {
        console.error('Error updating tariff:', error);
      } else {
        if (data) {
          setTariffs(tariffs.map((t) => (t.id === editingTariff.id ? (data[0] as Tariff) : t)));
        }
        resetForm();
      }
    } else {
      // Create logic
      const { data, error } = await supabase
        .from('tariffs')
        .insert([{ title, price, lessons }])
        .select();
      if (error) {
        console.error('Error creating tariff:', error);
      } else {
        if (data) {
          setTariffs([...tariffs, ...(data as Tariff[])]);
        }
        resetForm();
      }
    }
  };

  const deleteTariff = async (id: number) => {
    const { error } = await supabase.from('tariffs').delete().eq('id', id);
    if (error) {
      console.error('Error deleting tariff:', error);
    } else {
      setTariffs(tariffs.filter((tariff) => tariff.id !== id));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 py-24">
      <h2 className="text-2xl font-bold mb-4 ">Admin Panel</h2>

      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          {editingTariff ? 'Tarifni Tahrirlash' : 'Yangi Tarif Yaratish'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Tarif nomi"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input placeholder="Narxi" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Darslar</h3>
          {lessons.map((lesson, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <Input
                placeholder={`Dars #${index + 1}`}
                value={lesson.description}
                onChange={(e) => handleLessonChange(index, 'description', e.target.value)}
                className="flex-grow"
              />
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={lesson.includes}
                  onCheckedChange={(checked) =>
                    handleLessonChange(index, 'includes', checked as boolean)
                  }
                />
                <span>Mavjud</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeLesson(index)}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button onClick={addLesson} variant="outline" size="sm">
            + Dars qo'shish
          </Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSubmit} className="w-full md:w-auto">
            {editingTariff ? 'Saqlash' : 'Yaratish'}
          </Button>
          {editingTariff && (
            <Button onClick={resetForm} variant="outline" className="w-full md:w-auto">
              Bekor qilish
            </Button>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Mavjud Tariflar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tariffs.map((tariff) => (
            <div key={tariff.id} className="border p-4 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold">{tariff.title}</h3>
                <p className="text-gray-500 mb-2">{tariff.price} so'm</p>
                <ul className="list-disc pl-5">
                  {tariff.lessons.map((lesson, i) => (
                    <li
                      key={i}
                      className={`${
                        lesson.includes ? 'text-green-600' : 'text-red-600 line-through'
                      }`}>
                      {lesson.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" onClick={() => handleEdit(tariff)}>
                  <Edit className="h-4 w-4 mr-2" /> Tahrirlash
                </Button>
                <Button variant="destructive" size="sm" onClick={() => deleteTariff(tariff.id)}>
                  <Trash className="h-4 w-4 mr-2" /> O'chirish
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
