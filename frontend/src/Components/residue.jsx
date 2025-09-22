//Achievements Section  
 
 <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-item p-4 rounded text-center"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(13, 27, 76, 0.1)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                minWidth: "180px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                className="mb-3 achievement-icon d-flex justify-content-center align-items-center mx-auto"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#0D1B4C",
                  color: "#BFA14A",
                  fontSize: "1.5rem",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="fw-bold mb-1"
                style={{ color: "#BFA14A", fontSize: "1.6rem" }}
              >
                {item.value}
              </h3>
              <p className="mb-0" style={{ color: "#0D1B4C", fontWeight: 500 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>