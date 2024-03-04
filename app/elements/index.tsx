"use client";

import { Btn, data, type Data } from "@/data";
import Image from "next/image";
import { FC } from "react";
import { useDataStore } from "../state";

export const GameTitle = () => {
  const { dataIndex } = useDataStore();
  return (
    <div className="flex items-center gap-3">
      <div className="overflow-clip rounded-full border-2 border-sky-900">
        <Image
          className=""
          src={data[dataIndex].img}
          alt="Game"
          width={54}
          height={54}
        />
      </div>
      <h1 className="rounded-md bg-zinc-900 p-2.5 px-6 text-3xl font-light">
        {data[dataIndex].name}
      </h1>
      <div></div>
    </div>
  );
};

export const GameListItem: FC<{ item: Data; index: number }> = ({
  item,
  index,
}) => {
  const { dataIndex, setDataIndex } = useDataStore();

  const _style =
    dataIndex === index
      ? "bg-sky-700 hover:bg-sky-700"
      : "bg-transparent hover:bg-zinc-800/70";

  return (
    <div
      onClick={() => setDataIndex(index)}
      className={`flex cursor-pointer items-center gap-3 p-8 py-4 duration-200 ${_style}`}
    >
      <Image src={item.img} alt="game" width={47} height={47} />
      <p className="text-sm">{item.name}</p>
    </div>
  );
};

export const GameCtrlBlock = () => {
  const { dataIndex } = useDataStore();

  return (
    <div className="space-y-3 py-6">
      <GameCtrlBlockItem item={data[dataIndex].btn1} />
      <GameCtrlBlockItem item={data[dataIndex].btn2} />
      <GameCtrlBlockItem item={data[dataIndex].btn3} />
      <GameCtrlBlockItem item={data[dataIndex].btn4} />
    </div>
  );
};

export const GameCtrlBlockItem: FC<{ item: Btn }> = ({ item }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 rounded-md bg-zinc-900/50 p-6 py-4">
        <div className="flex aspect-square h-24 items-center justify-center rounded-lg border-2 border-sky-500 p-6 text-lg font-medium">
          {item.label}
        </div>

        <div className="mt-4 flex h-28 flex-grow flex-col text-xs">
          <div className="flex-grow bg-zinc-700">
            <div
              style={{ width: `${item.walk}%` }}
              className="h-full bg-sky-500 duration-200"
            />
          </div>
          <div className="flex h-4">
            <div
              style={{ width: `${item.forceLevels[0]}%` }}
              className="h-full bg-sky-500 duration-200"
            />
            <div
              style={{ width: `${item.forceLevels[1]}%` }}
              className="h-full bg-sky-800 duration-200"
            />
            <div
              style={{ width: `${item.forceLevels[2]}%` }}
              className="h-full bg-sky-300 duration-200"
            />
          </div>
          <div className="grid h-6 grid-cols-3 pt-3">
            <div className="h-full text-center">{`${item.short} Walk ${item.action} `}</div>
            <div className="h-full text-center">{`${item.label} Default`}</div>
            <div className="h-full text-center">{`${item.short} Sprint ${item.action} `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
