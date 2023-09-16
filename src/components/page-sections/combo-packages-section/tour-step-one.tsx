
import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button, Select, notification  } from 'antd';
import styles from "./combo-packages-section.module.scss";
import ButtonFooter from "@/components/ui/buttons/button/button";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { getTourSelectData } from '@/utils/fetches';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

function TourStepOne({products, setProducts}:any){
  // console.log(products)
  const [selectData,setSelectData] = useState<any>();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Was unsuccessfully',
      description:
        'Required select tours',
    });
  };
    const formItemLayout = {
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
      };
    
    const getTours = () =>{
      getTourSelectData()
            .then((res: any) => {
              if (res) {
                // console.log(res,"----res");
                const options = [];
                for (let i = 0; i < res?.length; i++) {
                options.push({
                  value: res[i]?.id,
                  label: res[i]?.name,
                });
                }
                setSelectData(options);
              } else {
                null;
              }
            })
            .catch(() => console.log("error"));
    }
    
    useEffect(()=>{
        getTours();
    },[])
          

  const onFinish = (values: any) => {
    if (values.names.length){
      // console.log('Received values of form:', values);
      setProducts(values.names)
    } else {
      openNotificationWithIcon('error')
    }
  };
    return(
        <div className={styles.modalBody}>
            {/* step1 */}
           {contextHolder} 
            <div>
            <p className={styles.titleModal}>Make your program</p>
            <div className={styles.desc}>
                <span>
                    Select the tours you are interested in by <br/> name and enter the phone number
                </span>
            </div>
            </div>
            <Form
                name="dynamic_form_item"
                // {...formItemLayoutWithOutLabel}
                onFinish={onFinish}
                className={styles.part2}
            >
                <Form.List
                name="names"
                >
                {(fields, { add, remove }, { errors }) => (
                    <div className={styles.formSrcoll}>
                    {fields.map((field, index) => (
                        <Form.Item
                        {...(formItemLayout)}
                        required={false}
                        key={field.key}
                        >
                        <Form.Item
                            {...field}
                            validateTrigger={['onChange', 'onBlur']}
                            noStyle
                        >
                        <Select
                        placeholder="Select tour"
                        options={selectData}
                        />

                        </Form.Item>
                        </Form.Item>
                    ))}
                    <Form.Item>
                        <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: '100%' }}
                        icon={<PlusOutlined />}
                        >
                        Add more
                        </Button>
                        <Form.ErrorList errors={errors} />
                    </Form.Item>
                    </div>
                )}
                </Form.List>
                <ButtonFooter onClick={() => console.log(1)} extraClass={styles.buttonModal} content={`Next`} />
            </Form>
            </div>
    )
}

export default TourStepOne;