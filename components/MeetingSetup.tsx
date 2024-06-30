"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

function MeetingSetup({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) {
  const [isMicCamToggled, setIsMicCamToggled] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("usecall must be used within streamCall component");
  }

  useEffect(() => {
    if (isMicCamToggled) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggled, call?.camera, call?.microphone]);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => setIsMicCamToggled(e.target.checked)}
          />
          Join with Mic and Camera Off
        </label>
        <DeviceSettings />
        <Button
          className="rounded-md bg-green-500 px-4 py-2.5"
          onClick={() => {
            call.join();

            setIsSetupComplete(true);
          }}
        >
          Join Meeting
        </Button>
      </div>
    </div>
  );
}

export default MeetingSetup;
