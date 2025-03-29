
interface APIConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: { [key: string]: string };
  body?: any;
}

export const fetchData = async (endpoint: string, config: APIConfig): Promise<any> => {
  try {
    const { method, headers, body } = config;
    const fetchConfig = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    }
    const url = process.env.NEXT_PUBLIC_GAME_ON_BACKEND_BASE_URL + endpoint;
    const response = await fetch(url, fetchConfig);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("error in fetchData", error)
    throw error;
  }

}

export interface CreateOrgResponse {
    // Id           string         `json:"Id"`
    // Name         string         `json:"Name"`
    // CreatedDate  time.Time      `json:"CreatedDate"`
    // IsActive     bool           `json:"IsActive"`
    // ModifiedDate time.Time      `json:"ModifiedDate"`
    // Display      *Display       `json:"Display"`
    // Domains      []Domain       `json:"Domains"`
    // Metadata     map[string]any `json:"Metadata"`
    // Connections  []Connection   `json:"Connections"`
    // Policies     *Policy        `json:"Policies"`

    Id: string;
    Name: string;
    CreatedDate: string;
    IsActive: boolean;
    ModifiedDate: string;
    // Display: Display;
    // Domains: Domain[];
    Metadata: { [key: string]: any };
    // Connections: Connection[];
    // Policies: Policy;
}