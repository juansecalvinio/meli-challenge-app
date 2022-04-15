import { UlBreadcrumbs, LiBreadcrumbs } from './styled';
import { GrNext } from 'react-icons/gr';

const Breadcrumbs = ({ sections }: any): any => {
  return (
    <UlBreadcrumbs>
      {sections.map((section: any) => (
        <LiBreadcrumbs>{section}<GrNext /></LiBreadcrumbs>
      ))}
    </UlBreadcrumbs>
  )
}

export default Breadcrumbs;