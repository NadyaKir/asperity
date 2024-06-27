export default function Heading({ children, extra }) {
  return (
    <h5
      className={`text-base md:text-2xl font-medium md:font-normal font-textPrimary ${extra}`}
    >
      {children}
    </h5>
  );
}
