import Select from 'react-select';
import Head from 'next/head';

export default function MongkolPage() {
  const options = [
    {value: 'ธุรกิจซื้อมาขายไป', label: 'ธุรกิจซื้อมาขายไป'},
    {value: 'ธุรกิจให้บริการ', label: 'ธุรกิจให้บริการ'},
    {value: 'ธุรกิจอสังหาริมทรัพย์', label: 'ธุรกิจอสังหาริมทรัพย์'},
    {value: 'ธุรกิจผลิต', label: 'ธุรกิจผลิต'},
    {value: 'สำนักงานบัญชี', label: 'สำนักงานบัญชี'},
    {value: 'ธุรกิจอื่น ๆ', label: 'ธุรกิจอื่น ๆ'}
  ];

  return (
    <>
    <Head>
      <title>Peak Mongkol</title>
      <meta property='og:image' content="" />
    </Head>
    <div>
      <h1>Peak Mongkol</h1>
    </div>
    </>
  );
}
