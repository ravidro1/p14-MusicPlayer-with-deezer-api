import React from "react";
import {
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeMediumIcon,
  VolumeMuteIcon,
} from "../IconExport";

export default function VolumeIconSelector({ volume }) {
  if (volume == 0) return <VolumeMuteIcon />;

  if (volume <= 25) return <VolumeLowIcon />;
  if (volume <= 50) return <VolumeMediumIcon />;

  return <VolumeHighIcon />;
}
