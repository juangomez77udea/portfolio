"use client";

import MainLayout from "@/app/components/templates/MainLayout";
import LeftMenu from "@/app/components/organism/LeftMenu";
import RightMenu from '@/app/components/organism/RigthMenu'

export default function Home() {
  return (
    <MainLayout
      left={
        <div className=" pr-6 justify-between">
          <LeftMenu />
        </div>
      }
      center={<div>Contenido central</div>}
      right={<div>
        <RightMenu />
      </div>}
    />
  );
}