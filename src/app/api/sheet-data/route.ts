import { getGoogleSheetData } from '@/utils/googleSheets';
import { NextResponse } from 'next/server';

export async function GET() {
  const sheetId = '1GzCdUFfKIgn2TJCYXEuNyBtYlg3BGoz2yS_-RnOIytI';
  const range = `Umumiy ma'lumot!A3:F19`; // Задайте нужный диапазон

  try {
    const data = await getGoogleSheetData(sheetId, range);
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
