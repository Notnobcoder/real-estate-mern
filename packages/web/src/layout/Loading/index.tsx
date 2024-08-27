import React from 'react'

const LoadingLayout = ({ children, loading }: { children: React.ReactNode, loading: boolean }) => {
  return (
    <div>
      {loading ? (
        <h4>Loading Please try Again</h4>
      ) : (
        <>
          {children}
        </>
      )}
    </div>
  )
}

export default LoadingLayout
