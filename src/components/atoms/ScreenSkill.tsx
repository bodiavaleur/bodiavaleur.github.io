import React from "react";
import { ColorType } from "../../theme";
import { SkillIcon } from "../../ui/atoms";

interface ScreenSkillProps {
  icon: React.ReactElement;
  color: ColorType;
}

export function ScreenSkill({ icon, color }: ScreenSkillProps) {
  return <SkillIcon color={color}>{icon}</SkillIcon>;
}
