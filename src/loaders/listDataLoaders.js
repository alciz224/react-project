import axios from "axios";

export async function eventLoader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const filter = url.searchParams.get("filter") || "week";

  const { data } = await axios.get("events", {
    params: { search, filter },
  });

  return data;
}

export async function postLoader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const role = url.searchParams.get("role") || "all";

  const { data } = await axios.get("users", {
    params: { search, role },
  });

  return data;
}
