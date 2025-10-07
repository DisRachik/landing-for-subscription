import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className='container'>
      <div className='gradient-bg text flex flex-col gap-4 p-10'>
        <Button size='lg' discount>
          Discount
        </Button>
        <Button fonts='special'>Default</Button>
        <Button variant='dark' fonts='special'>
          Dark
        </Button>
        <Button variant='vivid' size='sm' fonts='xs' className='max-w-[11.875rem]'>
          Vivid
        </Button>
        <Button variant='vivid' size='lg' discount>
          Vivid BIG
        </Button>
        <Button size='md' fonts='sm'>
          Submit
        </Button>
      </div>
    </div>
  );
}
