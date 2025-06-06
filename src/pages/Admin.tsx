import React, { useState } from 'react';
import { Users, Settings, DollarSign, FileText, Menu, X, TrendingUp, UserCheck, CreditCard, Eye, ChevronLeft } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [editingPricing, setEditingPricing] = useState(false);
  const [pricingData, setPricingData] = useState({
    basic: { price: 9.99, features: ['5 Projects', 'Basic Support', '1GB Storage'] },
    premium: { price: 19.99, features: ['Unlimited Projects', 'Priority Support', '10GB Storage', 'Advanced Analytics'] },
    enterprise: { price: 49.99, features: ['Everything in Premium', 'Custom Integrations', 'Unlimited Storage', '24/7 Support'] }
  });

  // Mock data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', registered: '2024-01-15', status: 'Active', subscription: 'Premium' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', registered: '2024-01-10', status: 'Active', subscription: 'Basic' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', registered: '2024-01-05', status: 'Inactive', subscription: 'Free' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', registered: '2024-01-20', status: 'Active', subscription: 'Enterprise' },
  ];

  const subscriptions = [
    { id: 1, user: 'John Doe', plan: 'Premium', status: 'Active', nextBilling: '2024-02-15', amount: '$19.99' },
    { id: 2, user: 'Jane Smith', plan: 'Basic', status: 'Active', nextBilling: '2024-02-10', amount: '$9.99' },
    { id: 3, user: 'Sarah Wilson', plan: 'Enterprise', status: 'Active', nextBilling: '2024-02-20', amount: '$49.99' },
    { id: 4, user: 'Mike Johnson', plan: 'Free', status: 'Cancelled', nextBilling: '-', amount: '$0.00' },
  ];

  const stats = {
    totalUsers: users.length,
    activeSubscriptions: subscriptions.filter(s => s.status === 'Active').length,
    monthlyRevenue: subscriptions.filter(s => s.status === 'Active').reduce((sum, s) => sum + parseFloat(s.amount.replace('$', '')), 0),
    conversionRate: 75
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
    { id: 'cms', label: 'CMS - Pricing', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleUpdatePricing = (plan, field, value) => {
    if (field === 'features') {
      setPricingData(prev => ({
        ...prev,
        [plan]: {
          ...prev[plan],
          features: value
        }
      }));
    } else {
      setPricingData(prev => ({
        ...prev,
        [plan]: {
          ...prev[plan],
          [field]: value
        }
      }));
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Dashboard Overview</h1>
        <span className="badge bg-primary">Admin Panel</span>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <Users className="text-primary" size={32} />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="card-title text-muted mb-1">Total Users</h6>
                  <h3 className="mb-0">{stats.totalUsers}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <UserCheck className="text-success" size={32} />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="card-title text-muted mb-1">Active Subscriptions</h6>
                  <h3 className="mb-0">{stats.activeSubscriptions}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="text-warning" size={32} />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="card-title text-muted mb-1">Monthly Revenue</h6>
                  <h3 className="mb-0">${stats.monthlyRevenue.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="text-info" size={32} />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="card-title text-muted mb-1">Conversion Rate</h6>
                  <h3 className="mb-0">{stats.conversionRate}%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Recent User Activity</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Action</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Upgraded to Premium</td>
                      <td>2024-01-15</td>
                      <td><span className="badge bg-success">Success</span></td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td>Profile Updated</td>
                      <td>2024-01-14</td>
                      <td><span className="badge bg-info">Info</span></td>
                    </tr>
                    <tr>
                      <td>Sarah Wilson</td>
                      <td>Payment Processed</td>
                      <td>2024-01-13</td>
                      <td><span className="badge bg-success">Success</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Subscription Distribution</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Free Plan</span>
                  <span>25%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-secondary" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Basic Plan</span>
                  <span>25%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Premium Plan</span>
                  <span>25%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="mb-0">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Enterprise Plan</span>
                  <span>25%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">User Management</h1>
        <button className="btn btn-primary">Add New User</button>
      </div>
      
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white">
          <div className="row align-items-center">
            <div className="col">
              <h5 className="card-title mb-0">Registered Users</h5>
            </div>
            <div className="col-auto">
              <input type="search" className="form-control" placeholder="Search users..." />
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Registration Date</th>
                  <th>Status</th>
                  <th>Subscription</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h6 className="mb-0">{user.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.registered}</td>
                    <td>
                      <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${
                        user.subscription === 'Enterprise' ? 'bg-success' :
                        user.subscription === 'Premium' ? 'bg-warning' :
                        user.subscription === 'Basic' ? 'bg-primary' : 'bg-secondary'
                      }`}>
                        {user.subscription}
                      </span>
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary">
                          <Eye size={14} />
                        </button>
                        <button className="btn btn-outline-secondary">Edit</button>
                        <button className="btn btn-outline-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubscriptions = () => (
    <div className="space-y-6">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Subscription Management</h1>
        <div className="btn-group">
          <button className="btn btn-outline-primary">Export</button>
          <button className="btn btn-primary">New Subscription</button>
        </div>
      </div>
      
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white">
          <h5 className="card-title mb-0">Active Subscriptions</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Next Billing</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map(sub => (
                  <tr key={sub.id}>
                    <td>{sub.user}</td>
                    <td>
                      <span className={`badge ${
                        sub.plan === 'Enterprise' ? 'bg-success' :
                        sub.plan === 'Premium' ? 'bg-warning' :
                        sub.plan === 'Basic' ? 'bg-primary' : 'bg-secondary'
                      }`}>
                        {sub.plan}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${sub.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td>{sub.nextBilling}</td>
                    <td className="fw-bold">{sub.amount}</td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary">View</button>
                        <button className="btn btn-outline-warning">Modify</button>
                        <button className="btn btn-outline-danger">Cancel</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCMS = () => (
    <div className="space-y-6">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">CMS - Pricing Management</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setEditingPricing(!editingPricing)}
        >
          {editingPricing ? 'Save Changes' : 'Edit Pricing'}
        </button>
      </div>
      
      <div className="row g-4">
        {Object.entries(pricingData).map(([plan, data]) => (
          <div key={plan} className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white text-center">
                <h5 className="card-title text-capitalize mb-0">{plan} Plan</h5>
              </div>
              <div className="card-body text-center">
                <div className="mb-4">
                  {editingPricing ? (
                    <input
                      type="number"
                      className="form-control form-control-lg text-center"
                      value={data.price}
                      onChange={(e) => handleUpdatePricing(plan, 'price', parseFloat(e.target.value))}
                      step="0.01"
                    />
                  ) : (
                    <h2 className="text-primary">${data.price}/mo</h2>
                  )}
                </div>
                
                <div className="text-start">
                  <h6 className="fw-bold mb-3">Features:</h6>
                  {editingPricing ? (
                    <div className="space-y-2">
                      {data.features.map((feature, index) => (
                        <input
                          key={index}
                          type="text"
                          className="form-control form-control-sm mb-2"
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...data.features];
                            newFeatures[index] = e.target.value;
                            handleUpdatePricing(plan, 'features', newFeatures);
                          }}
                        />
                      ))}
                      <button
                        className="btn btn-sm btn-outline-primary w-100"
                        onClick={() => {
                          const newFeatures = [...data.features, 'New Feature'];
                          handleUpdatePricing(plan, 'features', newFeatures);
                        }}
                      >
                        Add Feature
                      </button>
                    </div>
                  ) : (
                    <ul className="list-unstyled">
                      {data.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="text-success me-2">✓</i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {!editingPricing && (
                <div className="card-footer bg-white">
                  <button className="btn btn-outline-primary w-100">
                    View Analytics
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {!editingPricing && (
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white">
            <h5 className="card-title mb-0">Pricing Analytics</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h6>Most Popular Plan</h6>
                <p className="text-muted">Premium Plan - 45% of subscribers</p>
              </div>
              <div className="col-md-6">
                <h6>Average Revenue Per User</h6>
                <p className="text-muted">$24.99/month</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h1 className="h3 mb-4">Settings</h1>
      
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">General Settings</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Site Name</label>
                  <input type="text" className="form-control" defaultValue="My Admin Panel" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Admin Email</label>
                  <input type="email" className="form-control" defaultValue="admin@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Timezone</label>
                  <select className="form-select">
                    <option>UTC</option>
                    <option>EST</option>
                    <option>PST</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Security Settings</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">
                    Two-Factor Authentication
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">
                    Email Notifications
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    Maintenance Mode
                  </label>
                </div>
              </div>
              <button className="btn btn-primary">Update Security</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'users': return renderUsers();
      case 'subscriptions': return renderSubscriptions();
      case 'cms': return renderCMS();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none" 
          style={{ zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="d-flex">
        {/* Improved Sidebar */}
        <nav className={`bg-white shadow-lg border-end position-fixed position-lg-sticky top-0 h-100 transition-all ${
          sidebarOpen ? 'd-block' : 'd-none d-lg-block'
        } ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`} 
             style={{ 
               width: sidebarCollapsed ? '80px' : '280px', 
               zIndex: 1050,
               transition: 'width 0.3s ease'
             }}>
          
          {/* Sidebar Header */}
          <div className="p-4 border-bottom bg-primary text-white">
            <div className="d-flex justify-content-between align-items-center">
              {!sidebarCollapsed && (
                <h4 className="mb-0 fw-bold">Admin Panel</h4>
              )}
              <div className="d-flex">
                <button 
                  className="btn btn-sm text-white d-none d-lg-block me-2"
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                  <ChevronLeft className={`transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} size={18} />
                </button>
                <button 
                  className="btn btn-sm text-white d-lg-none"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="p-3">
            <ul className="nav nav-pills flex-column">
              {navigationItems.map(item => (
                <li key={item.id} className="nav-item mb-2">
                  <button
                    className={`nav-link w-100 text-start d-flex align-items-center border-0 rounded ${
                      activeTab === item.id ? 'active bg-primary text-white' : 'text-dark hover-bg-light'
                    }`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    title={sidebarCollapsed ? item.label : ''}
                  >
                    <item.icon size={18} className={sidebarCollapsed ? 'mx-auto' : 'me-3'} />
                    {!sidebarCollapsed && <span className="fw-medium">{item.label}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-grow-1" style={{ 
          marginLeft: window.innerWidth >= 992 ? (sidebarCollapsed ? '80px' : '280px') : '0',
          transition: 'margin-left 0.3s ease'
        }}>
          {/* Header */}
          <header className="bg-white shadow-sm border-bottom sticky-top">
            <div className="d-flex justify-content-between align-items-center p-4">
              <button 
                className="btn btn-outline-primary d-lg-none"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={20} />
              </button>
              
              <div className="d-flex align-items-center ms-auto">
                <div className="dropdown">
                  <button 
                    className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center" 
                    type="button" 
                    data-bs-toggle="dropdown"
                  >
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" 
                         style={{ width: '32px', height: '32px', fontSize: '14px' }}>
                      AU
                    </div>
                    Admin User
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow">
                    <li><a className="dropdown-item" href="#"><Users size={16} className="me-2" />Profile</a></li>
                    <li><a className="dropdown-item" href="#"><Settings size={16} className="me-2" />Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-danger" href="#"><X size={16} className="me-2" />Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-4">
            <div className="container-fluid">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .sidebar-collapsed .nav-link span {
          display: none;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .transition-transform {
          transition: transform 0.3s ease;
        }
        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default Admin;
