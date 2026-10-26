const baseUrl = "/api/business";

async function getServiceTypes() {
  const response = await fetch(`${baseUrl}/types`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
}

async function getBusinessesByType(type: string) {
  const response = await fetch(`${baseUrl}/types/${type}`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
}

async function getBusinessInfo(business_id: string) {
  const response = await fetch(`${baseUrl}/${business_id}`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
}

async function getServicesByBusiness(business_id: string) {
  const response = await fetch(`${baseUrl}/${business_id}/services`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
}

export default {
  getServiceTypes,
  getBusinessesByType,
  getBusinessInfo,
  getServicesByBusiness
};
