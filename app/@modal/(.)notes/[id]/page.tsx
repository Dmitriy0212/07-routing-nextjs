import { getSingleNote } from '@/lib/api';
import Modal from '../../../../components/Modal/Modal';
import NoteDetails from '../../../../app/notes/[id]/NoteDetails.client';

type Props = {
  params: Promise<{ id: string }>;
};
const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);
  return (
    <Modal>
      <NoteDetails data={note} />
    </Modal>
  );
};

export default NotePreview;
