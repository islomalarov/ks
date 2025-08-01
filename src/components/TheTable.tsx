'use client';
import { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TheTitle from './TheTitle';

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

  return (
    <div id="table" className="container mx-auto target  ">
      <TheTitle title="Video kursimizning o'quv dasturi" />
      <Table>
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
              <TableHeader key={rowIndex} className="text-md">
                <TableRow>
                  {row.map((cell, cellIndex) => (
                    <TableHead
                      key={cellIndex}
                      className={cellIndex === 0 ? 'text-left' : 'text-center'}>
                      {cell}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            ) : (
              <TableBody key={rowIndex}>
                <TableRow className={`${rowIndex === data.length - 1 && 'font-bold'}`}>
                  {row.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      className={
                        cellIndex === 0 || cell === `Tez orada qo'shiladi!`
                          ? 'text-left'
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
