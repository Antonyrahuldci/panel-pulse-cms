
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-content-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Your App</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern web application with a powerful admin panel for managing users, subscriptions, and content.
        </p>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Admin Access</h3>
            <p className="text-gray-600 mb-4">
              Access the comprehensive admin panel to manage your application.
            </p>
            <Link 
              to="/admin" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Go to Admin Panel
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-2">User Management</h4>
              <p className="text-gray-600">Manage user registrations, profiles, and account status.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-2">Subscription Control</h4>
              <p className="text-gray-600">Track and manage user subscriptions and billing.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-2">CMS Features</h4>
              <p className="text-gray-600">Edit pricing, features, and content dynamically.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
