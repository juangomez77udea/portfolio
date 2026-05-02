"use client";

import MainLayout from "@/app/components/templates/MainLayout";
import LeftMenu from "@/app/components/organism/LeftMenu";
import RightMenu from '@/app/components/organism/RigthMenu';
import ContentCenter from "./components/organism/ContentCenter";

export default function Home() {
  return (
    <MainLayout
      left={
        <div className=" h-full">
          <LeftMenu />
        </div>
      }
      center={<div>
        <ContentCenter />
      </div>}
      right={
        <div className="h-full bg-white dark:bg-secondary transition-colors duration-300">
          <RightMenu />
        </div>
      }
    />
  );
}