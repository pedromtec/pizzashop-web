import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorNote({ message }: { message: string }) {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-4 bg-primary text-primary-foreground"
      id="error-page"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Oops!
      </h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Sorry, an unexpected error has occurred.
      </h3>
      <p className="leading-7">{message}</p>
    </div>
  )
}

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  if (isRouteErrorResponse(error)) {
    return <ErrorNote message={error.data} />
  }

  if (error instanceof Error) {
    return <ErrorNote message={error.message} />
  }

  return <ErrorNote message="Unknown error" />
}
