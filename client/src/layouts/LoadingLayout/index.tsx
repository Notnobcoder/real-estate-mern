import { Loader2 } from "lucide-react";
import React from "react";

interface LoadingLaoutProps {
  loading: boolean;
  children: React.ReactNode;
}

export const LoadingLayout: React.FC<LoadingLaoutProps> = (props) => {
  const { loading, children } = props;
  return (
    <div>
      {loading ? (
        <div className={`my-4`}>
          <Loader2 className="animate-spin w-8 h-8" />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
