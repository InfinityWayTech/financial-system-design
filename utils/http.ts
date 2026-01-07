import { API_CONFIG } from "@/lib/config/api";

interface CustomRequestInit extends RequestInit {
  params?: Record<string, any>;
}

const http = {
  get: async <T>(url: string, options?: CustomRequestInit): Promise<T> => {
    const headers = {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...options?.headers,
    };

    let requestUrl = API_CONFIG.BASE_URL + url;
    if (options?.params) {
      const queryParams = new URLSearchParams(options.params).toString();
      requestUrl += `?${queryParams}`;
    }

    const response = await fetch(requestUrl, {
      method: "GET",
      ...options,
      headers,
    });
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        } else {
          errorMessage = await response.text();
        }
      } catch (e) {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }
    return response.json() as Promise<T>;
  },

  post: async <T>(
    url: string,
    data: any,
    options?: RequestInit
  ): Promise<T> => {
    const isFormData =
      typeof FormData !== "undefined" && data instanceof FormData;

    const headers: Record<string, string> = {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...(options?.headers as Record<string, string>),
    };

    if (isFormData) {
      delete headers["Content-Type"];
    }

    const response = await fetch(API_CONFIG.BASE_URL + url, {
      method: "POST",
      ...options,
      headers,
      body: isFormData ? data : JSON.stringify(data),
    });
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const errorData = await response.json();
          if (errorData && errorData.message) {
            errorMessage = errorData.message;
          } else {
            errorMessage = await response.text();
          }
        } else {
          errorMessage = await response.text();
        }
      } catch (e) {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }

    const contentType = response.headers.get("content-type") || "";
    if (response.status === 204 || response.status === 205) {
      return undefined as unknown as T;
    }
    const rawText = await response.text();
    if (!rawText || rawText.trim().length === 0) {
      return undefined as unknown as T;
    }
    if (contentType.includes("application/json")) {
      try {
        return JSON.parse(rawText) as T;
      } catch {
        return undefined as unknown as T;
      }
    }
    return rawText as unknown as T;
  },

  put: async <T>(url: string, data: any, options?: RequestInit): Promise<T> => {
    const headers = {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...options?.headers,
    };

    const response = await fetch(API_CONFIG.BASE_URL + url, {
      method: "PUT",
      ...options,
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        } else {
          errorMessage = await response.text();
        }
      } catch (e) {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }
    return response.json() as Promise<T>;
  },

  patch: async <T>(
    url: string,
    data: any,
    options?: RequestInit
  ): Promise<T> => {
    const headers = {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...options?.headers,
    };

    const response = await fetch(API_CONFIG.BASE_URL + url, {
      method: "PATCH",
      ...options,
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        } else {
          errorMessage = await response.text();
        }
      } catch (e) {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }
    return response.json() as Promise<T>;
  },

  delete: async <T>(url: string, options?: RequestInit): Promise<T> => {
    const headers = {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...options?.headers,
    };

    const response = await fetch(API_CONFIG.BASE_URL + url, {
      method: "DELETE",
      ...options,
      headers,
    });
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        } else {
          errorMessage = await response.text();
        }
      } catch (e) {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }
    return response.json() as Promise<T>;
  },
};

export default http;
