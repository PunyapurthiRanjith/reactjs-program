import CustomCard from "./bootstrap-card";

const FirstCompo = () => {
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4 ">
            <CustomCard title="John" text="React Developer" />
          </div>
          <div className="col-sm-4">
            <CustomCard title="Micheal" text="Angular Developer" />
          </div>
          <div className="col-sm-4">
            <CustomCard title="sindhuja" text="Node js Developer" />
          </div>
          <div className="col-sm-4">
            <CustomCard title="krishna" text="Backend Developer" />
          </div>
          <div className="col-sm-4">
            <CustomCard title="shiva" text="Backend Developer" />
          </div>
          <div className="col-sm-4">
            <CustomCard title="mukesh" text="Backend Developer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstCompo;
