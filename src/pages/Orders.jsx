import { Layout } from '../components/page/Layout'

export function Orders() {
  return (
    <>
      <Layout>
        <div className="order-section">
          <div className="page-header">
            <h2>Customer Name</h2>
            <h3>Manage Your Profile</h3>
          </div>
          <div className="orders-container">
            <div className="order-box">
              <div className="order-box-header">
                <div className="status-badge-wrapper">
                  <div className="status-badge">
                    <span className="confirmed">Confirmed</span>
                  </div>
                </div>
                <div className="order-id-wrapper">
                  <span>Order #1</span>
                </div>
                <div className="order-price-wrapper">
                  <span>£35.00</span>
                </div>
              </div>
              <div className="order-box-body">
                <div className="order-detail-wrapper">
                  <i className="fa fa-hashtag"></i>
                  <span>Items: 4</span>
                </div>
                <div className="order-detail-wrapper">
                  <i className="fa fa-calendar"></i>
                  <span>Placed: 2025-07-08</span>
                </div>
                <div className="order-detail-wrapper">
                  <i className="fa fa-note-sticky"></i>
                  <span>Note: Lorem ipsum</span>
                </div>
                <button className="cancel-order-button">Cancel Order</button>
              </div>
            </div>
            <div className="order-box">
              <div className="order-box-header">
                <div className="status-badge-wrapper">
                  <div className="status-badge">
                    <span className="cancelled">Cancelled</span>
                  </div>
                </div>
                <div className="order-id-wrapper">
                  <span>Order #2</span>
                </div>
                <div className="order-price-wrapper">
                  <span className="cancelled">£35.00</span>
                </div>
              </div>
              <div className="order-box-body">
                <div className="order-detail-wrapper">
                  <i className="fa fa-hashtag"></i>
                  <span>Items: 4</span>
                </div>
                <div className="order-detail-wrapper">
                  <i className="fa fa-calendar"></i>
                  <span>Placed: 2025-07-08</span>
                </div>
                <div className="order-detail-wrapper">
                  <i className="fa fa-note-sticky"></i>
                  <span>Note: -</span>
                </div>
              </div>
            </div>
            <div className="order-box">
              <div className="order-box-header">
                <div className="status-badge-wrapper">
                  <div className="status-badge">
                    <span className="paid">Paid</span>
                  </div>
                </div>
                <div className="order-id-wrapper">
                  <span>Order #3</span>
                </div>
                <div className="order-price-wrapper">
                  <span>£35.00</span>
                </div>
              </div>
              <div className="order-box-body">
                <div className="order-detail-wrapper">
                  <i className="fa fa-hashtag"></i>
                  <span>Items: 4</span>
                </div>
                <div className="order-detail-wrapper">
                  <i className="fa fa-calendar"></i>
                  <span>Placed: 2025-07-08</span>
                </div>
                <div className="order-detail-wrapper">
                  <i className="fa fa-note-sticky"></i>
                  <span>Note: -</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}