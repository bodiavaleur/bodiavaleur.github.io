import React from "react";
import { ContactIcon } from "../../ui/atoms";

interface IconLinkProps {
  to: string;
  icon: React.ReactElement;
  white?: boolean;
}

export function IconLink({ to, icon, white }: IconLinkProps) {
  return (
    <ContactIcon
      white={white}
      href={to}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </ContactIcon>
  );
}
