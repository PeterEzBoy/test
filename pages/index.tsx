import { getPageAllMongkol } from '../lib/api'
import { MongkolButton, MongkolForm } from '../lib/mongkols'
import Select from 'react-select';
import Head from 'next/head';

export default function MongkolPage({header, faqs}) {
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
    <div dangerouslySetInnerHTML={{ __html: header }}></div>

    <form onSubmit={MongkolForm} className="mongkol-form active">
        <input className="mongkol-number" type="number" placeholder="0xx-xxx-xxxx" name="p_number" id="p_n" required />
        <input className="mongkol-input" type="text" placeholder="ชื่อ-นามสกุล*" name="firtname" id="f_name" required />
        <input className="mongkol-input" type="text" placeholder="ชื่อกิจการ*" name="buss_name" id="bass_name" required />
        <div className="mongkol-select">
            <Select options={options} name="business" className="mongkol-select" classNamePrefix="mongkol-select" instanceId="mongkol-buss" placeholder="ประเภทธุรกิจ" required />
        </div>
        <div className="concern-flex">
          <input type="checkbox" id="concern" name="concernt" value="" required />
          <div>
            <label>ให้ความยินยอม เก็บ รวมรวมใช้ และเปิดเผยเพื่อการตลาด</label>
            <button className="openModal btn-consent">อ่านเพิ่มเติม</button>
          </div>
        </div>
        <button className="btn-submit mongkol-btn" onClick={MongkolButton}>ประมวลผลข้อมูล</button>
    </form>

    <div id="modal" className="alignfull">
      <div className="modal-content consent _h">
        <span className="close">×</span>
          <h4>การให้ความยินยอมในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลเพื่อการตลาด</h4>
          <p className="_indent">เพื่อให้เป็นไปตามข้อกำหนดทางกฎหมายที่เกี่ยวข้องกับการคุ้มครองข้อมูลส่วนบุคคล บริษัท พี ยู ยู เอ็น
              อินเทลลิเจนท์
              จำกัด
              (บริษัท) จึงขอให้ท่านให้ความยินยอมในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลตามเนื้อหาที่แจ้งแก่ท่านดังต่อไปนี้</p>

          <p>ข้อมูลที่ทางบริษัทจะเก็บรวบรวม ใช้ และเปิดเผยเผื่อวัตถุประสงค์ทางการตลาดได้แก่</p>
          <ul>
              <li>First Name (ชื่อ)</li>
              <li>Last Name (นามสกุล)</li>
              <li>Email (อีเมล)</li>
              <li>Phone (หมายเลขโทรศัพท์)</li>
              <li>Company Name (ชื่อบริษัทหรือหน่วยงานที่ท่านสังกัด)</li>
          </ul>
          <p>วัตถุประสงค์ของการให้ความยินยอม</p>
          <ul>
              <li>เพื่อวิจัย ทำข้อมูลสถิติ พัฒนา วิเคราะห์ ผลิตภัณฑ์ บริการ หรือสิทธิประโยชน์เพื่อตอบสนองความต้องการของท่าน
              </li>
              <li>เพื่อการเสนอผลิตภัณฑ์ บริการ และสิทธิบัตรประโยชน์ที่เหมาะสมแก่ท่าน</li>
          </ul>

          <p>ผู้ที่จะเข้าถึงข้อมูลของท่านตามความยินยอมนี้ได้แก่</p>
          <ul>
              <li>บริษัท และ พนักงานของบริษัทที่ทำหน้าที่อันเกี่ยวข้องกับการทำการตลาด</li>
          </ul>
          <p className="_indent">
              กรณีที่ท่านไม่ให้ความยินยอม หรือได้ขอใช้สิทธิเพิกถอนความยินยอมในภายหลัง ท่านจะพลาดโอกาสในการได้รับข้อเสนอ
              เกี่ยวกับ
              ผลิตภัณฑ์ บริการ และสิทธิประโยชน์ที่เหมาะสมกับความต้องการของท่านโดยเฉพาะจากบริษัท
              บุคคลอื่นที่ทางบริษัทได้แจ้งต่อท่านไว้ภายใต้ความยินยอมนี้</p>
          <p className="_indent">ทั้งนี้การให้ความยินยอมแก่บริษัทในครั้งนี้ จะไม่ส่งผลกระทบ หรือเป็นการแก้ไขความยินยอมใดๆ
              ที่ท่านให้ไว้แก่บริษัทก่อนหน้าความยินยอมนี้</p>
          <p className="_indent">ท่านสามารถอ่านข้อกำหนดเพิ่มเติมเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน
              หรือการขอใช้สิทธิในฐานะเจ้าของข้อมูลส่วนบุคคลได้ที่ dpo@peakengine.com</p>
          <p className="_indent">การกด “ยินยอม” จะเป็นการยินยอมให้บริษัท นำข้อมูลของท่านตามที่ระบุไว้ในความยินยอมนี้
              ไปใช้ตามวัตถุประสงค์และเปิดเผยต่อบุคคลตามที่ได้กำหนดไว้ความยินยอมนี้</p>
      </div>
    </div>

    <div dangerouslySetInnerHTML={{ __html: faqs }}></div>

    <footer className="wp-block-template-part">
      <div className="is-layout-constrained wp-block-group p-footer-alt">
        <div className="p-footer alignfull">
          <div className="s-container">
            <p className=""> © 2022 PUUN Intelligent Co., Ltd. All rights reserved.</p>
            <a className="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await getPageAllMongkol();

    const head = data.edges[0].node.content;
    const faq = data.edges[1].node.content;
  
    return { 
      props: { 
        header: head,
        faqs: faq 
      }
    }
  } catch (error) {
    throw new Error("Fail fecth data to propps!");
  }
}
