function PageTitle() {
  return (
    <header className="text-center py-4 mb-4 border-bottom bg-white shadow-sm rounded-3">
      <div className="container">
        <h1 id="title" className="h2 fw-bold text-primary mb-1 d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-layers-fill" aria-hidden="true"></i>
          COP 4331 MERN Stack Demo
        </h1>
        <p className="text-secondary small mb-0 fw-semibold">
          Now Live on the Internet — COP 4331 Card Management System
        </p>
      </div>
    </header>
  );
}

export default PageTitle;
