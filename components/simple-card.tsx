export function LineContainer({ children }: { children: React.ReactNode }) {
  function Ellipses() {
    const sharedClasses =
      "rounded-full outline outline-8 sm:my-6 md:my-8 size-1 my-4 outline-muted bg-cyan-400";
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`} />
          <div className={`${sharedClasses} -mx-[2px] place-self-end`} />
          <div className={`${sharedClasses} -mx-[2.5px]`} />
          <div className={`${sharedClasses} -mx-[2px] place-self-end`} />
        </section>
      </div>
    );
  }
  function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative mx-auto w-full rounded-lg container">
        <div className="absolute left-0 top-4 -z-0 h-px w-full bg-muted sm:top-6 md:top-8" />
        <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-muted sm:bottom-6 md:bottom-8" />
        <div className="relative w-full border-x border-muted">
          <Ellipses />
          <div className="relative z-20 mx-auto py-8">{children}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <Container>
        <div className="px-40 py-20 w-full center">{children}</div>
      </Container>
    </div>
  );
}
