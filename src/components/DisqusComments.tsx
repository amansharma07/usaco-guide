import { DiscussionEmbed } from 'disqus-react';
import * as React from 'react';
import { useState } from 'react';

export default function DisqusComments(props) {
  const [show, setShow] = useState(false);

  if (show) {
    return <DiscussionEmbed {...props} />;
  } else {
    return (
      <div className="bg-gray-50 sm:rounded-lg mb-4">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Join the Discussion!
          </h3>
          <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
            <p>Feel free to voice your thoughts in the comments section.</p>
          </div>
          <div className="mt-5">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                onClick={() => setShow(true)}
              >
                Show Comments
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
