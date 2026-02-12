const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function getPromotions() {
  const res = await fetch(`${BASE_URL}/promotions`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch promotions');
  return res.json();
}

export async function fetchPromotionById(id: number) {
  const res = await fetch(`${BASE_URL}/promotions/${id}`);
  if (!res.ok) throw new Error('Failed to fetch promotion');
  return res.json();
}

export async function createPromotion(promotionData: any) {
  const res = await fetch(`${BASE_URL}/promotions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promotionData),
  });
  if (!res.ok) throw new Error('Failed to create promotion');
  return res.json();
}

export async function updatePromotion(id: number, promotionData: any) {
  const res = await fetch(`${BASE_URL}/promotions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promotionData),
  });
  if (!res.ok) throw new Error('Failed to update promotion');
  return res.json();
}

export async function deletePromotion(id: number) {
  const res = await fetch(`${BASE_URL}/promotions/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete promotion');
  return res.json();
}

export async function togglePromotionStatus(id: number, currentStatus: string) {
  const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
  return updatePromotion(id, { status: newStatus });
}

export async function schedulePromotion(id: number, startDate: string, endDate: string) {
  return updatePromotion(id, { startDate, endDate });
}
