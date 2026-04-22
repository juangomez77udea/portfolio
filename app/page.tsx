"use client";

import MainLayout from "@/app/components/templates/MainLayout";
import LeftMenu from "@/app/components/organism/LeftMenu";
import RightMenu from '@/app/components/organism/RigthMenu';
import ContentCenter from "./components/organism/ContentCenter";

export default function Home() {
  return (
    <MainLayout
      left={
        <div className=" pr-6 justify-between">
          <LeftMenu />
        </div>
      }
      center={<div>
        <ContentCenter />
      </div>}
      right={<div>
        <RightMenu />
      </div>}
    />
  );
}