const BASE_URL = "http://localhost:5050/orders";

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }
    return await fetch(`${BASE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

export const getOrders = async () => {
  const result = await baseRequest({ method: "GET" });
  return result.json();
};

export const postOrder = async (body) =>
  await baseRequest({ method: "POST", body });

export const editOrder = async (id, body) =>
  await baseRequest({ urlPath: `/${id}`, method: "PATCH", body });

export const deleteOrder = async (id) =>
  await baseRequest({ urlPath: `/${id}`, method: "DELETE" });
