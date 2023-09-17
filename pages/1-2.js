import Head from "next/head";

// 1-2

// セクション 一覧画面

// https://flowrift.com/c/content/zmJ5J?view=preview
// 上記参照

export default function Home() {

  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-md px-4 md:px-8">
    <h1 class="mb-4  text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">エンジニアになるための考え方</h1>


    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
    皆さんがこれから目指しているエンジニア/Web制作者になるには技術だけではなく考え方を育むことも非常に重要です。この講義ではエンジニアになるための考え方を学習していきます。<br /><br/>
    </p>
    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">重要な3つの考え方</h2>

    <ul class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
      <li>1,探究心を育む</li>
      <li>2,自己解決力の向上</li>
      <li>3,協調性</li>
    </ul>

    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">1,探究心を育む</h2>
    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
      皆さんはエンジニアとしてぐんぐん伸びていく人の特徴は何があると思いますか？
      それは才能でもなく、大学の学科が理工学系であるからということでもありません
      （もちろん数学は大切ですし時に天才的にプログラミングができる人も稀にいます）。
      答えはプログラミングが楽しいかどうかということです。少しでもこの感覚があれば適性はあります。
      プログラミングが好きな人は自発的に様々な技術やわからないことを調べていい循環を生むことができます
    </p>

    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">おすすめの学習方法</h2>

    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
    プログラミングを楽しく学ぶおすすめの方法として自身が学習したものを使って自分の作りたいアプリを作るというのがあります。
    （運営者の米倉もこの方法で理解を深めております）
    どんな雑なコードでも最初は問題ありません。大切なのは自身の学んだことを理解し、
    自分の作りたいものに落とし込むことです。完璧なものではなく、動けばOKです!
    どんどん学んだもの活かして自身でアプリやゲームを作成していってください！
    </p>   

    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
    2,自己解決力の向上
    </h2>

    <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
    自己解決力と一言で言ってみましたがそこには具体的なものとして下記があります。
    ・わからないことを認識できる
    ・正しいと思う内容をイメージできる
    ・困っている点をググって解決できる

    <ul class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
      <li>わからないことを認識できる</li>
      <li>正しいと思う内容をイメージできる</li>
      <li>困っている点をググって解決できる</li>
    </ul>
    皆さんがこれからプログラミングを始めると必ずエラーが出てきます。
    このエラーを解決するという作業をどうやって行うかが非常に大切です。
    </p>

        <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-xl md:mb-4">
        Step1,エラーにぶつかる
        </h2>
        

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
          プログラミングを楽しく学ぶおすすめの方法として自身が学習したものを使って自分の作りたいアプリを作るというのがあります。
          （運営者の米倉もこの方法で理解を深めております）
          どんな雑なコードでも最初は問題ありません。大切なのは自身の学んだことを理解し、
          自分の作りたいものに落とし込むことです。完璧なものではなく、動けばOKです!
          どんどん学んだもの活かして自身でアプリやゲームを作成していってください！
        </p>  

        <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-xl md:mb-4">
        Step2,なぜエラーが出ているのかを把握する
        </h2>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
          プログラミングを楽しく学ぶおすすめの方法として自身が学習したものを使って自分の作りたいアプリを作るというのがあります。
          （運営者の米倉もこの方法で理解を深めております）
          どんな雑なコードでも最初は問題ありません。大切なのは自身の学んだことを理解し、
          自分の作りたいものに落とし込むことです。完璧なものではなく、動けばOKです!
          どんどん学んだもの活かして自身でアプリやゲームを作成していってください！
        </p>  

        <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-xl md:mb-4">
        Step3,調べる
        </h2>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        そのエラー文をコピーアンドペーストしてググってみましょう。
        同じようなエラーに遭遇して解決している人がいるかもしれません。
        何かエラーを解決する手がかりが掴めるかもしれません。<br /><br/>
        ※今や当たり前になっているChatGPTに聞いてみるのもアリです。開発現場ではわからないところを
        ChatGPTで聞くことでよりその開発現場にあった解決方法がわかることがあります。
        今の内に使い方に慣れておきましょう。
        </p>  

        <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-xl md:mb-4">
        ＞＞＞エラーは怖くない＞＞＞
        </h2>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        開発をしているとどんな上級者の方でもエラーに遭遇します。
        おそらくひろ⚪︎きさんも任天堂の元社長の岩田社長もエラーと闘っていたことでしょう。
        大切なのはエラーが出ることで今どんな処理のどういう不具合が起きているかを把握することです。
        エラーが出たら落ち着いてまずはググってみたりChatGPTに聞いてみましょう!
        </p> 

        <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-xl md:mb-4">
        3,質問する
        </h2>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
        開発をしているとどんな上級者の方でもエラーに遭遇します。
        おそらくひろ⚪︎きさんも任天堂の元社長の岩田社長もエラーと闘っていたことでしょう。
        大切なのはエラーが出ることで今どんな処理のどういう不具合が起きているかを把握することです。
        エラーが出たら落ち着いてまずはググってみたりChatGPTに聞いてみましょう!
        </p> 

      



    {/* サンプルコード */}

    <ul class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
      <li>This is a section of some simple filler text</li>
      <li>Also known as placeholder text</li>
      <li>It shares some characteristics of a real written text</li>
    </ul>

    <blockquote class="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

    <div class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
      <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" loading="lazy" alt="Photo by Minh Pham" class="h-full w-full object-cover object-center" />
    </div>

    <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

    <p class="text-gray-500 sm:text-lg">
    This is a section of some simple filler text, 
    also known as placeholder text. It shares some characteristics of a 
    real written text but is random or otherwise generated. It may be used to 
    display a sample of fonts or generate text for testing. Filler text is dummy 
    text which has no meaning however looks very similar to real text.
    </p>
    {/* サンプルコード */}
  </div>
</div>
    );
}