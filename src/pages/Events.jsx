import { Layout } from '../components/page/Layout'

export function Events() {
  return (
    <>
      <Layout>
        {/* <!-- Events Section --> */}
        <div className="events-section container">
          <div className="page-header">
            <h2>Public Events</h2>
            <h3>Browse from our publicly available events!</h3>
          </div>

          {/* <!-- Filters --> */}
          <div className="filters">
            <div className="filter-inner">
              <div className="filter-boxes">
                <div className="filter-group-wrapper wrapper-1">
                  <div className="filter-group">
                    <label htmlFor="search">Search</label>
                    <input
                      type="text"
                      id="search"
                      placeholder="City or event name"
                    />
                  </div>
                </div>
                <div className="filter-group-wrapper wrapper-2">
                  <div className="filter-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                  </div>
                </div>
                <div className="filter-group-wrapper wrapper-3">
                  <div className="filter-group">
                    <label htmlFor="category">Category</label>
                    <select id="category">
                      <option value="">---Select a category---</option>
                      <option value="1">Category 1</option>
                      <option value="2">Category 2</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label htmlFor="sort">Sort by Date</label>
                    <select id="sort">
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="clear-btn button-primary">Clear Filter</button>
            </div>
          </div>

          {/* <!-- Event Grid --> */}
          <div className="event-grid">
            {/* <!-- Repeat htmlFor 6 placeholder events --> */}
            <div className="event-box">
              <div className="event-image">
                <div className="event-image-overlay"></div>
                <img src="images/placeholder.png" alt="Event 1" />
                <p className="event-category">Category 1</p>
              </div>
              <div className="event-info">
                <h2>Event 1</h2>
                <p>
                  <i className="fa fa-map-pin"></i>
                  City 1
                </p>
                <p>
                  <i className="fa fa-calendar"></i>
                  2025-09-22
                </p>
                <p>
                  <i className="fa fa-clock"></i>
                  12:00
                </p>
                <p>
                  <i className="fa fa-camera"></i>
                  5 pictures available
                </p>
                <a href="#" className="button-primary">View Pictures</a>
              </div>
            </div>

            {/* <!-- Copy htmlFor Events 2–6 --> */}
            <div className="event-box">
              <div className="event-image">
                <div className="event-image-overlay"></div>
                <img src="images/placeholder.png" alt="Event 2" />
                <p className="event-category">Category 2</p>
              </div>
              <div className="event-info">
                <h2>Event 2</h2>
                <p>
                  <i className="fa fa-map-pin"></i>
                  City 2
                </p>
                <p>
                  <i className="fa fa-calendar"></i>
                  2025-09-23
                </p>
                <p>
                  <i className="fa fa-clock"></i>
                  14:00
                </p>
                <p>
                  <i className="fa fa-camera"></i>
                  8 pictures available
                </p>
                <a href="#" className="button-primary">View Pictures</a>
              </div>
            </div>

            <div className="event-box">
              <div className="event-image">
                <div className="event-image-overlay"></div>
                <img src="images/placeholder.png" alt="Event 3" />
                <p className="event-category">Category 3</p>
              </div>
              <div className="event-info">
                <h2>Event 3</h2>
                <p>
                  <i className="fa fa-map-pin"></i>
                  City 3
                </p>
                <p>
                  <i className="fa fa-calendar"></i>
                  2025-09-24
                </p>
                <p>
                  <i className="fa fa-clock"></i>
                  16:00
                </p>
                <p>
                  <i className="fa fa-camera"></i>
                  10 pictures available
                </p>
                <a href="#" className="button-primary">View Pictures</a>
              </div>
            </div>

            <div className="event-box">
              <div className="event-image">
                <div className="event-image-overlay"></div>
                <img src="images/placeholder.png" alt="Event 4" />
                <p className="event-category">Category 4</p>
              </div>
              <div className="event-info">
                <h2>Event 4</h2>
                <p>
                  <i className="fa fa-map-pin"></i>
                  City 4
                </p>
                <p>
                  <i className="fa fa-calendar"></i>
                  2025-09-25
                </p>
                <p>
                  <i className="fa fa-clock"></i>
                  18:00
                </p>
                <p>
                  <i className="fa fa-camera"></i>
                  6 pictures available
                </p>
                <a href="#" className="button-primary">View Pictures</a>
              </div>
            </div>

            <div className="event-box">
              <div className="event-image">
                <div className="event-image-overlay"></div>
                <img src="images/placeholder.png" alt="Event 5" />
                <p className="event-category">Category 5</p>
              </div>
              <div className="event-info">
                <h2>Event 5</h2>
                <p>
                  <i className="fa fa-map-pin"></i>
                  City 5
                </p>
                <p>
                  <i className="fa fa-calendar"></i>
                  2025-09-26
                </p>
                <p>
                  <i className="fa fa-clock"></i>
                  10:00
                </p>
                <p>
                  <i className="fa fa-camera"></i>
                  3 pictures available
                </p>
                <a href="#" className="button-primary">View Pictures</a>
              </div>
            </div>

            <div className="event-box">
              <div className="event-image">
                <div className="event-image-overlay"></div>
                <img src="images/placeholder.png" alt="Event 6" />
                <p className="event-category">Category 6</p>
              </div>
              <div className="event-info">
                <h2>Event 6</h2>
                <p>
                  <i className="fa fa-map-pin"></i>
                  City 6
                </p>
                <p>
                  <i className="fa fa-calendar"></i>
                  2025-09-27
                </p>
                <p>
                  <i className="fa fa-clock"></i>
                  20:00
                </p>
                <p>
                  <i className="fa fa-camera"></i>
                  7 pictures available
                </p>
                <a href="#" className="button-primary">View Pictures</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}