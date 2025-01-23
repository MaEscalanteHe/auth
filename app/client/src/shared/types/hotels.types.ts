import { HotelIntegrationType } from "shared/enums";

export type Hotel = {
  accountId: string;
  hotelId: string;
  name: string;
  public: boolean;

  integrations: HotelIntegration[];
};

export type HotelIntegration = {
  integrationId: string;
  name: string;
  redirectUrl: string;
  type: HotelIntegrationType;
  hotel: number;
  accounts: number;
};

export type PublicHotelIntegration = {
  name: string;
  url: string;
  accounts: number;
} | null;

export type PublicHotel = {
  id: string;
  name: string;
  owner: string;
  client: PublicHotelIntegration;
  web: PublicHotelIntegration;
};

/**
 * -------------------------------------------------------
 * --------- PRIVATE -------------------------------------
 * -------------------------------------------------------
 */

export type PrivateHotelIntegrationConnection = {
  accountId: string;
  hotelId: string;
  integrationId: string;
  scopes: string[];
  updatedAt: number;
};

export type PrivateHotelIntegration = {
  integrationId: string;
  name: string;
  redirectUrl: string;
  type: HotelIntegrationType;
  connections: PrivateHotelIntegrationConnection[];
};

export type PrivateHotel = {
  integrations: PrivateHotelIntegration[];
} & Exclude<Hotel, "integrations">;
