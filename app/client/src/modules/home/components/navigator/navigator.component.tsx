import React, { useMemo } from "react";
import {
  AccountIconComponent,
  AdminIconComponent,
  BskyIconComponent,
  ButtonComponent,
  ConnectionsIconComponent,
  HomeIconComponent,
  HotelIconComponent,
  NavItemComponent,
} from "@oh/components";
import { LinkComponent } from "shared/components";
import { useAccount, useUser } from "shared/hooks";
//@ts-ignore
import styles from "./navigator.module.scss";

export const HomeNavigatorComponent: React.FC = () => {
  const { isLogged } = useAccount();
  const { user } = useUser();

  const isAdmin = useMemo(() => Boolean(user && user?.admin), [user]);

  if (!isLogged) return null;
  return (
    <div className={styles.navigator}>
      <LinkComponent to="/">
        <NavItemComponent icon={<HomeIconComponent />}>Home</NavItemComponent>
      </LinkComponent>
      <LinkComponent to="/account">
        <NavItemComponent icon={<AccountIconComponent />}>
          Account
        </NavItemComponent>
      </LinkComponent>
      <LinkComponent to="/account/hotels">
        <NavItemComponent icon={<HotelIconComponent />}>
          My Hotels
        </NavItemComponent>
      </LinkComponent>
      <LinkComponent to="/account/connections">
        <NavItemComponent icon={<ConnectionsIconComponent />}>
          Connections
        </NavItemComponent>
      </LinkComponent>
      <LinkComponent to="/account/bsky">
        <NavItemComponent icon={<BskyIconComponent />}>
          Bluesky
        </NavItemComponent>
      </LinkComponent>
      {isAdmin ? (
        <>
          <hr className={styles.hr} />
          <LinkComponent to="/admin">
            <NavItemComponent icon={<AdminIconComponent />}>
              Admin
            </NavItemComponent>
          </LinkComponent>
        </>
      ) : null}
      <LinkComponent to="/logout">
        <ButtonComponent fullWidth>Logout</ButtonComponent>
      </LinkComponent>
    </div>
  );
};
