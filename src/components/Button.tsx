interface ChildrenProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ChildrenProps) => {
  return (
    <button className="mt-4 text-md px-4 py-2 rounded-full border border-[#381a7e] text-[#271A45] hover:bg-[#795fb8] hover:text-[#d9cef9]">
      {children}
    </button>
  );
};
