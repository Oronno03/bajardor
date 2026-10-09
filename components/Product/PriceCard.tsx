import { toBanglaNumber } from "@/lib/toBanglaNumber";
import React from "react";

const PriceCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: "green" | "red" | "default";
}) => {
  const colorClasses = {
    green: "text-success",
    red: "text-error",
    default: "text-base-content",
  };

  return (
    <div className="rounded-2xl border border-primary-2/10 bg-white p-5">
      <p className="text-sm text-muted-foreground">{title}</p>

      <p
        className={`mt-2 text-2xl font-bold tracking-tight ${
          colorClasses[color]
        }`}
      >
        {toBanglaNumber(value)}{" "}
        <span className="text-sm font-medium">টাকা</span>
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        {title === "সর্বনিম্ন দাম"
          ? "বাজারগুলোর মধ্যে সর্বনিম্ন"
          : title === "সর্বোচ্চ দাম"
            ? "বাজারগুলোর মধ্যে সর্বোচ্চ"
            : "বাজারভিত্তিক গড় দাম"}
      </p>
    </div>
  );
};

export default PriceCard;
