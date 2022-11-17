import { Image, useTheme } from "@aws-amplify/ui-react";
import logo from './MatchUp.png';

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      src= {logo} alt="application logo"
      padding={tokens.space.medium}
    />
  );
}