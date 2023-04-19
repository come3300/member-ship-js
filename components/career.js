import styles from 'styles/career.module.scss'

    
export  function Career() {
    return (
    <div className={styles.career}>

      <h3 className="text-3xl py-1 dark:text-white font-bold">Career</h3>
      <ul class={styles.timeline}>

            <li class={styles.timeline_ev}>
                <label class={styles.timeline_ev_icon}></label>
                    <div class={styles.timeline_ev_copy}>
                        <p class={styles.timeline_ev_thumbnail}>April 2019</p>
                        <h3>自転車で日本一周</h3>
                        <p>手持ち5000円で日本一周</p>
                       
                    </div>
            </li>

            <li class={styles.timeline_ev}>
                <label class={styles.timeline_ev_icon}></label>
                    <div class={styles.timeline_ev_copy}>
                        <p class={styles.timeline_ev_thumbnail}>March 2021</p>
                        <h3>近畿大学法学部</h3>
                        <h4>卒業</h4>
                    </div>
            </li>

            <li class={styles.timeline_ev}>
                <label class={styles.timeline_ev_icon}></label>
                    <div class={styles.timeline_ev_copy}>
                        <p class={styles.timeline_ev_thumbnail}>March 2021 -  March 2022</p>
                        <h3>株式会社ローカルべンチャールーム入社</h3>
                        <h4>サイト制作/システム制作/動画制作担当</h4>
                        <p>WP/CakePHP/JavaScript使用</p>
                    </div>
            </li>

          

            <li class={styles.timeline_ev}>
                <label class={styles.timeline_ev_icon}></label>
                    <div class={styles.timeline_ev_copy}>
                        <p class={styles.timeline_ev_thumbnail}>April 2022</p>
                        <h3>個人事業主として独立</h3>
                        <p><strong>主な事業</strong><br />サイト制作/システム制作/動画制作</p>
                    </div>
            </li>

            <li class={styles.timeline_ev}>
                <label class={styles.timeline_ev_icon}></label>
                    <div class={styles.timeline_ev_copy}>
                        <p class={styles.timeline_ev_thumbnail}>Decenber 2022</p>
                        <h3>アメリカ横断</h3>
                        <h4>From New York to Los Angeles</h4>
                       
                    </div>
            </li>
       </ul>  
    </div>
    )
  }