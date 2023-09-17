import Head from "next/head";

// セクション 一覧画面


export default function Home() {

  // const [darkMode, setDarkMode] = useState(false);

  return (
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">

      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Phase1</span>
          <span class="mt-1 text-gray-500 text-sm"></span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">まずはじめに</h2>
        <p class="leading-relaxed">CODE PLANへようこそ!この講座では、新しくスクールに加入した生徒の皆さんに向けて、開発環境の構築作業を通して、スクールでの学習の流れを体験して頂きます。このコースを通して開発者の常識を学んで、今後爆速で成長していけるようにしましょう！ この単元を学習する上での注意点この単元は個々のPCの設定が強く影響するため、課題解決に時間がかかることがございます。 また、教材の出力結果と相違が出る可能性があるので、何か不明な点ございましたら個別指導にてご質問ください。 ご了承いただきますよう、よろしくお願いいたします。</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Phase1-1</span>
          <span class="mt-1 text-gray-500 text-sm">⏰目標時間:5h</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">講座について</h2>
          <p class="leading-relaxed">この講座を取り組む際の注意点、どのような考え方で取り組めばいいのかを一緒に確認していきましょう！</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Phase1-2</span>
          <span class="text-sm text-gray-500">⏰目標時間5h</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">エンジニアになるための考え方</h2>
          <p class="leading-relaxed">これからみなさんが目指していくエンジニアになるための重要な考え方を学んで頂きます。エンジニアになるためにとても重要なことですので、まずはしっかりと読み込んで理解してください。</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Phase1-3</span>
          <span class="text-sm text-gray-500">⏰目標時間5h</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">環境構築</h2>
          <p class="leading-relaxed">皆さんのPCにこれから開発に必要なソフト、設定を行なって頂きます。皆さんそれぞれでPCの環境には個人差ありますのでもしわからないことがあれば遠慮なく質問しに来てください。</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
    );
}