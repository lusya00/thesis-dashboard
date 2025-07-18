'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function DebugPage() {
  const { data: session, status } = useSession();

  return (
    <div className="container py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Authentication Debug</CardTitle>
          <CardDescription>
            Current authentication status and session information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status */}
          <div>
            <h3 className="font-semibold mb-2">Status</h3>
            <Badge variant={status === 'authenticated' ? 'default' : 'secondary'}>
              {status}
            </Badge>
          </div>

          {/* Session Data */}
          {session && (
            <div>
              <h3 className="font-semibold mb-2">Session Data</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(session, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* Environment Variables */}
          <div>
            <h3 className="font-semibold mb-2">Environment Check</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">NEXTAUTH_URL:</span>{' '}
                <Badge variant="outline">
                  {process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'Not set'}
                </Badge>
              </div>
              <div>
                <span className="font-medium">NEXTAUTH_SECRET:</span>{' '}
                <Badge variant="outline">
                  {process.env.NEXTAUTH_SECRET ? 'Set' : 'Not set'}
                </Badge>
              </div>
              <div>
                <span className="font-medium">DATABASE_URL:</span>{' '}
                <Badge variant="outline">
                  {process.env.DATABASE_URL ? 'Set' : 'Not set'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button onClick={() => signOut()}>
              Sign Out
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Troubleshooting Steps</h4>
            <ol className="text-sm text-blue-700 space-y-1">
              <li>1. Check if DATABASE_URL is set correctly</li>
              <li>2. Run <code className="bg-blue-100 px-1 rounded">npm run create-admin</code> to create a test user</li>
              <li>3. Verify the user exists in the database</li>
              <li>4. Check server logs for authentication errors</li>
              <li>5. Ensure NEXTAUTH_SECRET is set</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 