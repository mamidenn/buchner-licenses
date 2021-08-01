import { Card } from "../components/Card";

const Licenses = () => {
  return (
    <>
      <div className="pb-3 mb-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Lizenzen</h1>
        <p className="fs-5 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit
          dolore ipsa est repudiandae voluptates, reiciendis blanditiis nobis
          ipsam asperiores, expedita ab minus consequuntur commodi, totam
          aliquid doloremque. Magni, suscipit.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <Card header="Gratis">
            <h1 className="card-title text-nowrap">
              0€<small className="text-muted fw-light">/Monat</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Velit impedit</li>
              <li>dolore ipsa est</li>
              <li>
                <strong>repudiandae</strong> voluptates
              </li>
            </ul>
            <button className="w-100 btn btn-lg btn-outline-primary">
              Jetzt gratis loslegen
            </button>
          </Card>
        </div>
        <div className="col">
          <Card header="Persönlich">
            <h1 className="card-title text-nowrap">
              15€<small className="text-muted fw-light">/Monat</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Velit impedit</li>
              <li>dolore ipsa est</li>
              <li>reiciendis</li>
              <li>blanditiis nobis</li>
            </ul>
            <button className="w-100 btn btn-lg btn-primary">Kaufen</button>
          </Card>
        </div>
        <div className="col">
          <Card header="Klassenraum" primary>
            <h1 className="card-title text-nowrap">
              <small className="text-muted fw-light">ab</small> 50€
              <small className="text-muted fw-light">/Monat</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Velit impedit</li>
              <li>dolore ipsa est</li>
              <li>reiciendis</li>
              <li>blanditiis nobis</li>
              <li>
                <strong>ipsam asperiores</strong>
              </li>
            </ul>
            <button className="w-100 btn btn-lg btn-primary">
              Kontaktieren Sie uns
            </button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Licenses;
