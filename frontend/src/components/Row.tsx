
export type RowProps = {
  label: string;
  value: string | number;
  imageUrl?: string;
}

export function Row({ label, value, imageUrl }: RowProps) {
  return (
    <div className="">

      {imageUrl ? (
        <div className="flex justify-center"> 

          <div
            className="h-20 w-20 shrink-0 rounded-full bg-zinc-200
                        mask mask-circle overflow-hidden"
          >
            <img
              src={imageUrl}
              alt=""
              className="h-full w-full object-cover"
            />
            
          </div>
        </div>
      ) : (
        <div className="flex items-baseline justify-between gap-4">
          <div className="text-xs font-medium text-zinc-500">{label}</div>
          <div className="text-sm font-medium text-zinc-900 break-all">{value}</div>
        </div>

      )}
    </div>
  );
}