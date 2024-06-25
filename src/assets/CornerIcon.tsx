import { styled, useTheme } from "@mui/material";
import { useAccentContext } from "src/hooks/ContextHooks";

const Svg = styled("svg")(({ color }) => ({
  color,
}));

export default function CornerIcon() {
  const theme = useTheme();
  const { accentColor } = useAccentContext();

  return (
    <Svg
      color={accentColor ?? theme.palette.accents.blue}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 57"
      id="vector"
      height="4rem"
      width={"4rem"}
    >
      <defs>
        <clipPath id="clip_path">
          <path d="M 0 0 L 800 0 L 800 600 L 0 600 L 0 0 Z" />
        </clipPath>
        <clipPath id="clip_path_1">
          <path d="M 0 0 L 800 0 L 800 600 L 0 600 L 0 0 Z" />
        </clipPath>
        <clipPath id="clip_path_2">
          <path d="M 0 0 L 800 0 L 800 600 L 0 600 L 0 0 Z" />
        </clipPath>
        <clipPath id="clip_path_3">
          <path d="M 0 0 L 800 0 L 800 600 L 0 600 L 0 0 Z" />
        </clipPath>
        <clipPath id="clip_path_4">
          <path d="M 0 0 L 800 0 L 800 600 L 0 600 L 0 0 Z" />
        </clipPath>
        <clipPath id="clip_path_5">
          <path d="M 0 0 L 800 0 L 800 600 L 0 600 L 0 0 Z" />
        </clipPath>
        <clipPath id="clip_path_6">
          <path d="M 0 0 L 800 0 L 800 600 L 0 600 L 0 0 Z" />
        </clipPath>
      </defs>
      <g id="group">
        <path
          id="path"
          clipPath="url(#clip_path)"
          d="M 0 0 L 800 0 L 800 600 L 0 600 Z"
          fill="#000000"
          fillOpacity="0"
          stroke="#00000000"
          strokeLinecap="square"
          fillRule="evenodd"
        />
        <path
          id="path_1"
          clipPath="url(#clip_path_1)"
          d="M 21.04 0 L 39.56 0 L 39.56 17.51 L 21.04 17.51 Z"
          fill="currentColor"
          stroke="none"
          strokeLinecap="square"
          fillRule="evenodd"
        />
        <path
          id="path_2"
          clipPath="url(#clip_path_2)"
          d="M 0 0 L 18.52 0 L 18.52 17.51 L 0 17.51 Z"
          fill="currentColor"
          fillOpacity="0.5"
          stroke="none"
          strokeLinecap="square"
          fillRule="evenodd"
        />
        <path
          id="path_3"
          clipPath="url(#clip_path_3)"
          d="M 42.09 0 L 60.61 0 L 60.61 17.51 L 42.09 17.51 Z"
          fill="currentColor"
          stroke="none"
          strokeLinecap="square"
          fillRule="evenodd"
        />
        <path
          id="path_4"
          clipPath="url(#clip_path_4)"
          d="M 42.09 19.74 L 60.61 19.74 L 60.61 37.25 L 42.09 37.25 Z"
          fill="currentColor"
          stroke="none"
          strokeLinecap="square"
          fillRule="evenodd"
        />
        <path
          id="path_5"
          clipPath="url(#clip_path_5)"
          d="M 21.04 19.74 L 39.56 19.74 L 39.56 37.25 L 21.04 37.25 Z"
          fill="currentColor"
          fillOpacity="0.5"
          stroke="none"
          strokeLinecap="square"
          fillRule="evenodd"
        />
        <path
          id="path_6"
          clipPath="url(#clip_path_6)"
          d="M 42.09 39.49 L 60.61 39.49 L 60.61 57 L 42.09 57 Z"
          fill="currentColor"
          fillOpacity="0.5"
          stroke="none"
          strokeLinecap="square"
          fillRule="evenodd"
        />
      </g>
    </Svg>
  );
}
