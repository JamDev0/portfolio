interface FooterListListProps {
  children: React.ReactNode;
}

export function FooterListList({ children }: FooterListListProps) {
  return (
    <ul className='body-5 list-none flex flex-col gap-y-2 items-center md:body-3'>
      {
        children
      }
    </ul>
  )
}