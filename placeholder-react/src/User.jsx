export default function User({ users }) {
    console.log(users);
    return (
        <div>
            <h2>Helo World</h2>
            <div className="grid">
{
                users.map(user => (
                    <div className="user-card">
                        <div className="card-header">
                            <div className="avatar">LG</div>
                            <div className="name">{user.name}</div>
                            <div class="username">@{user.username}</div>                            
                        </div>
                        <div className="card-body">
                            <div className="section text-left ">
                                <div className="section-title">Contact</div>
                                <div className="detail-item text-left "><strong>Email:</strong> {user.email}</div>
                                <div className="detail-item"><strong>Phone:</strong> {user.phone}</div>
                                <div className="detail-item"><strong>Website:</strong> {user.website}</div>
                            </div>

                            <div className="section text-left ">
                                <div className="section-title">Address</div>
                                <div className="detail-item">
                                   {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                                </div>
                            </div>

                            <div className="section text-left">
                                <div className="section-title">Company</div>
                                <div className="detail-item">
                                    <strong>Romaguera-Crona</strong>
                                    <div className="company-info">
                                        {user.company.catchPhrase}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ))
            }
            </div>
            
        </div>
    )
}





