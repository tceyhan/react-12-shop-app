import data from "../../helpers/data";
import Card from "../card/Card";
import SelectMenu from "../selectmenu/SelectMenu";

const BreakFast = () => {
  return (
    <div className="category">
      <header className="category-header">
        <h1 className="category-header-name">Kahvaltılık</h1>
        <p className="category-description">
          E-Hamal'da Kumbara sistemi var. Yaptığın alışverişlerden Türk Lirası
          biriktir.Kazandığın paralarla tekrar alışveriş yap
        </p>
      </header>
      <div className="selectmenu">
        <SelectMenu />
      </div>
      <main className="category-card">
        {data.map((product) => (
          <Card veri={product} />
        ))}
      </main>
      <footer className="seo">
        <h3>SEO ALANI</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsum
          hic quod iure deserunt ab ad id quidem tempora. Beatae minima neque
          quas eum officia explicabo odio reiciendis porro molestiae id expedita
          nobis accusantium est nostrum, cum in recusandae suscipit maxime at
          incidunt esse. Alias, ad harum quam ipsa assumenda provident hic ex
          minus soluta aperiam quisquam totam officiis repellendus rem fugiat ut
          voluptas fuga vero suscipit voluptatum laboriosam dolor deleniti.
          Voluptatibus magni recusandae, aut voluptas sequi corporis laboriosam
          ipsa aliquid in facilis impedit odit praesentium consectetur
          distinctio qui voluptatem sapiente dignissimos exercitationem at
          debitis eos omnis nihil? A odit sunt sint nesciunt sit, similique
          ipsum eum at ratione voluptatum nihil. Nisi, temporibus deleniti?
          Molestias, deleniti pariatur. Omnis aliquam culpa amet reiciendis
          magni minima ab animi, modi cupiditate nihil, labore expedita
          laboriosam dolor dolore! Accusamus, odio architecto nisi labore autem
          ducimus similique ab, id ullam est nobis asperiores alias fuga nostrum
          harum in quisquam, earum praesentium iure amet officia quas vitae
          dolore dolorem. Neque, eum asperiores cupiditate itaque provident vero
          iusto earum mollitia saepe in optio amet enim quasi praesentium
          voluptatibus laborum officia. Officia voluptatum a fugiat id
          exercitationem similique totam. Vitae distinctio minus quibusdam,
          magnam cum illo saepe veniam?
        </p>
      </footer>
    </div>
  );
};

export default BreakFast;
