
export default function Familys({family}){
    // console.log(family.Name)
    const {id, name, father, mother,Bonso, age}=family;
return(
    <div className="text-left ">
            
      <div className="student-card">
        <div className="card-header">ID: {id}</div>
        <div className="card-body">
          <div className="info-row">
            <span className="info-label">নাম</span>
            <span className="info-value">{name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">পিতার নাম</span>
            <span className="info-value">{father}</span>
          </div>
          <div className="info-row">
            <span className="info-label">মাতার নাম</span>
            <span className="info-value">{mother}</span>
          </div>
          <div className="info-row">
            <span className="info-label">বংশ</span>
            <span className="info-value">{Bonso}</span>
          </div>
          <div className="info-row age-row">
            <span className="info-label">বয়স</span>
            <span className="info-value">{age}</span>
          </div>
        </div>
      </div>
    
    </div>
    
)

}