'use client';
import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type RowData = string[];
const TheTable = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sheet-data');
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div id="table" className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center pb-4">Video kursimizning o&apos;quv dasturi</h2>
      <Table>
        <TableCaption>Vaqt o&apos;tishi bilan mavzular soni oshib boryapti. </TableCaption>
        {loading ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Ma&apos;lumotlar yuklanmoqda...
              </TableCell>
            </TableRow>
          </TableBody>
        ) : data.length > 0 ? (
          data.map((row, rowIndex) =>
            rowIndex === 0 ? (
              <TableHeader key={rowIndex}>
                <TableRow className="font-bold">
                  {row.map((cell, cellIndex) => (
                    <TableHead
                      key={cellIndex}
                      className={
                        cellIndex === 0 ? 'text-left' : cellIndex > 3 ? 'text-right' : 'text-center'
                      }>
                      {cell}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            ) : (
              <TableBody key={rowIndex}>
                <TableRow>
                  {row.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      className={
                        cellIndex === 0 || cell === `Tez orada qo'shiladi!`
                          ? 'text-left'
                          : cellIndex > 3
                          ? 'text-right'
                          : 'text-center'
                      }
                      colSpan={cell === `Tez orada qo'shiladi!` ? 2 : 0}>
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            ),
          )
        ) : (
          <TableBody>
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Ma&apos;lumotlar yuklanmadi
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </div>
  );
};
export default TheTable;
