const CheckoutForm = ({ values, onChangeHandler,disabled }) => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          value={values.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          disabled={disabled}
        />
      </div>
      <div className="form-control">
        <label htmlFor="family">Family</label>
        <input
          value={values.family}
          onChange={onChangeHandler}
          type="text"
          id="family"
          disabled={disabled}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          disabled={disabled}
        />
      </div>
      <div className="form-control">
        <label htmlFor="phone">Phone</label>
        <input
          value={values.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          disabled={disabled}
        />
      </div>
      <div className="form-control">
        <label htmlFor="address">Address</label>
        <input
          value={values.address}
          onChange={onChangeHandler}
          type="text"
          id="address"
          disabled={disabled}
        />
      </div>
      <div className="form-control">
        <label htmlFor="zipCode">ZipCode</label>
        <input
          value={values.zipCode}
          onChange={onChangeHandler}
          type="number"
          id="zipCode"
          disabled={disabled}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">description</label>
        <textarea
          value={values.description}
          onChange={onChangeHandler}
          id="description"
          disabled={disabled}
        ></textarea>
      </div>
    </form>
  );
};

export default CheckoutForm;
